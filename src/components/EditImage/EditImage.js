/* Heavily inspired by https://github.com/JakeHartnell/react-images-upload */
import React, { useEffect, useRef, useState } from 'react';

const EditImage = props => {
  const [badFileTypeList, setBadFileTypeList] = useState([]);
  const [badFileSizeList, setBadFileSizeList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const fileInputElement = useRef(null);
  const imageUrlInput = useRef(null);

  // Load default images if there are any
  useEffect(() => {
    console.log('useEffect is setting imageList');
    if (props.initialImageList && props.initialImageList[0]) {
      setImageList(
        props.initialImageList.map(item => ({ file: null, url: item }))
      );
    }
  }, [props.initialImageList]);
  // console.log('imageList: ', imageList);

	// Pre-populate the `Add URL` <input> with suggestedUrl
  useEffect(() => {
    console.log('useEffect is setting the imageUrlInput');
    if (imageUrlInput.current && props.suggestedUrl) {
      imageUrlInput.current.defaultValue = props.suggestedUrl;
    }
  }, [imageUrlInput, props.suggestedUrl]);

  function clearErrors() {
    setBadFileTypeList([]);
    setBadFileSizeList([]);
  }

  function handleUrlAdd(event) {
    event.preventDefault();
    clearErrors();

    // check file extension on URL
    let url = event.target.children[0].value;
    if (!hasExtension(url, ['.gif', '.jpg', '.jpeg', '.png', '.svg'])) {
      setBadFileTypeList(previousState => {
        let arr = Array.from(previousState);
        arr.push(url);
        return arr;
      });
      return;
    }

    setImageList(previousState => {
      let arr = Array.from(previousState);
      arr.push({ file: null, url });
      return arr;
    });

    // call function in props
    props.onUrlAdd(url);
  }

  function handleFileDrop(event) {
    const files = event.target.files;
    console.log('files: ', files);
    const allFilePromises = [];
    clearErrors();

    // Loop over added files
    // Note: limits iterations to `props.maxFileCount`, including current images
    for (
      let i = 0;
      i < Math.min(files.length, props.maxFileCount - imageList.length);
      i++
    ) {
      const file = files[i];

      // check for file extension
      if (!hasExtension(file.name)) {
        setBadFileTypeList(previousState => {
          let arr = Array.from(previousState);
          arr.push(file.name);
          return arr;
        });
        continue;
      }
      // check for file size
      if (file.size > props.maxFileSize) {
        setBadFileSizeList(previousState => {
          let arr = Array.from(previousState);
          arr.push(file.name);
          return arr;
        });
        continue;
      }
      // read file, and add it to promise list
      allFilePromises.push(readFile(file));
    }

    // await all file-read promises
    Promise.all(allFilePromises).then(newFilesData => {
      newFilesData.forEach(item => {
        // set state with dataUrl for previewing the image
        // useEffect will begin uploading the image
        setImageList(previousState => {
          let arr = Array.from(previousState);
          arr.push({ file: item.file, url: item.dataUrl });
          return arr;
        });

        console.log('before onImageUpload, fileList: ', imageList);

        // call function from props
        props.onImageUpload(item, setImageList);
      });
    });
  }

  // Check file type
  function hasExtension(fileName, formats = props.acceptedExtensions) {
    const pattern = '(' + formats.join('|').replace(/\./g, '\\.') + ')$';
    return new RegExp(pattern, 'i').test(fileName);
  }

  function onUploadClick(event) {
    // resets upload button
    event.target.value = null;
  }

  function readFile(file) {
    return new Promise(async (resolve, reject) => {
      try {
        const reader = new FileReader();
        // After `FileReader` has read the file,
        // Return object with file and dataUrl
        reader.onload = function(event) {
          // Add file name to the dataUrl
          let dataUrl = event.target.result;
          dataUrl = dataUrl.replace(';base64', `;name=${file.name};base64`);

          resolve({ file, dataUrl });
        };
        // Start file read
        reader.readAsDataURL(file);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * Removes image from state; cancel axios request to upload, if possible
   * @param {Object} index Index of an image object in `imageList`
   */
  function removeImage(index) {
    console.log('removeImage index:', index);
    console.log('removeImage imageList:', imageList);

    // @TODO: if Url is a full Url,
    // need to request back-end to delete image

    // cancel axios request if possible
    if (imageList[index].cancelToken) {
      imageList[index].cancelToken();
      console.log('User canceled image upload.');
    }

    console.log('imageList url: ', imageList[index].url);
    // remove image from state
    props.onRemove(imageList[index].url).then(() => {
      setImageList(previousState => {
        let arr = Array.from(previousState);
        arr.splice(index, 1);
        return arr;
      });
    });
  }

  function renderErrors() {
    let notAccepted = '';
    if (badFileTypeList.length) {
      notAccepted = badFileTypeList.map((fileName, index) => (
        <div className={`inline-error ${props.errorClass}`} key={index}>
          {fileName} {props.fileTypeError}
        </div>
      ));
    }
    if (badFileSizeList.length) {
      notAccepted = badFileSizeList.map((fileName, index) => (
        <div className={`inline-error ${props.errorClass}`} key={index}>
          {fileName} {props.fileSizeError}
        </div>
      ));
    }
    return <div className="errors-container">{notAccepted}</div>;
  }

  function renderLabel() {
    return props.withLabel ? (
      <p className={props.labelClass}>{props.label}</p>
    ) : null;
  }

  function renderImagePreview() {
    if (!imageList.length && props.placeholder) {
      return (
        <div className="image-preview-container">
          <img
            src={props.placeholder}
            className="image-preview placeholder"
            alt="placeholder"
          />
        </div>
      );
    }
    return (
      <>
        {imageList.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <div className="image-preview-container">
                <button
                  id="remove-button"
                  className={props.buttonsClassName}
                  onClick={() => removeImage(index)}
                  type="button"
                >
                  Remove
                </button>
                <img src={image.url} className="image-preview" alt="preview" />
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  }

  function renderInputs() {
    return (
      <div className="edit-image-inputs">
        <form onSubmit={handleUrlAdd}>
          <input
            name="imageURL"
            placeholder="Add image by URL"
            ref={imageUrlInput}
            required
            type="url"
          />
          <button className={props.buttonsClassName} type="submit">
            Add URL
          </button>
        </form>
        <p className="separator">— OR —</p>
        <div className="upload">
          <button
            type={props.uploadButtonText}
            className={props.buttonsClassName}
            onClick={triggerFileUpload}
          >
            {props.uploadButtonText}
          </button>
          <input
            type="file"
            ref={fileInputElement}
            name={props.inputElementName}
            multiple={!props.singleImage}
            onChange={handleFileDrop}
            onClick={onUploadClick}
            accept={props.accept}
          />
        </div>
        {renderLabel()}
      </div>
    );
  }

	// `fileInputElement` is hidden, so clicking the visible button
	// fires the click on `fileInputElement`
  function triggerFileUpload() {
    fileInputElement.current.click();
  }

  return (
    <div className={props.containerClassName}>
      {props.withPreview ? renderImagePreview() : null}
      {imageList.length < props.maxFileCount ? renderInputs() : null}
      {renderErrors()}
    </div>
  );
};

EditImage.defaultProps = {
  accept: 'image/*',
  acceptedExtensions: ['.jpg', '.jpeg', '.png'],
  buttonsClassName: 'edit-image-button',
  containerClassName: 'edit-image-container',
  errorClass: '',
  fileSizeError: ' file size is too big',
  fileTypeError: ' is not a supported file extension',
  initialImageList: [],
  inputElementName: '',
  label: 'Max file size: 5mb, accepted: .jpg, .png',
  labelClass: '',
  maxFileCount: Infinity,
  maxFileSize: 5242880,
  // onChange: () => {},
  onImageUpload: () => {},
  onRemove: () => {},
  onUrlAdd: () => {},
  placeholder: null,
  singleImage: true,
  suggestedUrl: '',
  uploadButtonText: 'Upload files',
  uploadButtonType: 'button',
  withLabel: true,
  withPreview: true
};

export default EditImage;
