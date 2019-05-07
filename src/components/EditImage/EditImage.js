import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosAuth from '../auth/axiosAuth';

const EditImage = props => {
  let inputElement;
  const [imageList, setImageList] = useState([]);
  const [badFileTypeList, setBadFileTypeList] = useState([]);
  const [badFileSizeList, setBadFileSizeList] = useState([]);

  // Supposed to fire the `onChange()` but I'm not sure about it
  // the imageList might not be good? I dunno
  // useEffect(() => {
  //   this.props.onChange(imageList);
  // }, [imageList]);

  // Load default images if there are any
  useEffect(() => {
    if (props.defaultImageList) {
      setImageList(
        props.defaultImageList.map(item => ({ file: null, url: item }))
      );
    }
  }, [props.defaultImageList]);

  // Check file type
  function hasExtension(fileName) {
    const pattern =
      '(' + props.acceptedExtensions.join('|').replace(/\./g, '\\.') + ')$';
    return new RegExp(pattern, 'i').test(fileName);
  }

  // File validation
  function onFileDrop(event) {
    const files = event.target.files;
    const allFilePromises = [];

    // Limit files to max number, including current images
    files.splice(props.maxFileCount - imageList.lenth);

    // Loop over added files
    for (let i in files) {
      const file = files[i];

      // check for file extension
      if (!hasExtension(file.name)) {
        setBadFileTypeList(previousState => previousState.push(file.name));
        continue;
      }
      // check for file size
      if (file.size > props.maxFileSize) {
        setBadFileSizeList(previousState => previousState.push(file.name));
        continue;
      }
      // read file, and add it to promise list
      allFilePromises.push(readFile(file));
    }

    // await all file-read promises, then update state
    Promise.all(allFilePromises).then(newFilesData => {
      newFilesData.forEach(item => {
        // set state with dataUrl for previewing the image
        // useEffect will begin uploading the image
        setImageList(previousState =>
          previousState.push({ file: item.file, url: item.dataUrl })
        );

        // send file to backend API
        axiosAuth()
          .put(
            'https://halg-backend.herokuapp.com//api/students/update/profile_picture',
            newFilesData.file,
            // create axios CancelToken, and save it to the image object
            {
              cancelToken: new axios.CancelToken(function executor(c) {
                imageList[imageList.length - 1].cancelToken = c;
              })
            }
          )
          .then(res =>
            // replace the dataUrl with the returned Cloudinary URL
            // and remove cancelToken from object
            setImageList(previousState => {
              let index;
              for (let i of previousState) {
                if (previousState[i].url === item.dataUrl) {
                  index = i;
                  break;
                }
              }
              if (index) {
                previousState[index].url = res.data.student.profile_pic;
                previousState[index].cancelToken = null;
              }
              return previousState;
            })
          )
          .catch(error => console.error(error));
      });
    });
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
   *
   * @param {Object} image An Object from `imageList`
   */
  function removeImage(index) {
    // @TODO: if Url is a full Url,
    // need to request back-end to delete image

    // if Url is dataUrl, cancel axios request
    if (imageList[index].cancelToken) {
      previousState[index].cancelToken();
      console.log('User canceled image upload.');
    }

    // remove image from state
    setImageList(previousState => {
      previousState.splice(index, 1);
      return previousState;
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
      notAccepted = this.state.badFileSizeList.map((fileName, index) => (
        <div className={`inline-error ${props.errorClass}`} key={index}>
          {fileName} {props.fileSizeError}
        </div>
      ));
    }
    return <div className="errors-container">{notAccepted}</div>;
  }

  function renderUploadIcon() {
    return props.withIcon ? (
      <p className="upload-image-icon">UPLOAD ICON PRETEND</p>
    ) : null;
  }

  function renderLabel() {
    return props.withLabel ? (
      <p className={props.labelClass}>{props.label}</p>
    ) : null;
  }

  function renderImagePreview() {
    return imageList.map((image, index) => {
      return (
        <div key={index} className="image-preview-wrapper">
          <div className="image-preview-container">
            {/* @TODO: Improve accessibility of the following code */}
            <div className="delete-image-icon" onClick={() => removeImage(image)}>
              X
            </div>
            <img src={item.url} className="image-preview" alt="preview" />
          </div>
        </div>
      );
    });
  }

  // not sure what this does yet. need to test.
  function triggerFileUpload() {
    inputElement.click();
  }

  return (
    <div className={`edit-image-container ${this.props.containerClassName}`}>
      {this.renderIcon()}
      {this.renderLabel()}
      {this.renderErrors()}
      <button
        type={this.props.buttonType}
        className={`edit-image-button ${props.buttonClassName}`}
        // style={this.props.buttonStyles}
        onClick={this.triggerFileUpload}
      >
        {this.props.buttonText}
      </button>
      <input
        type="file"
        ref={input => (inputElement = input)}
        name={props.inputElementName}
        multiple={!props.singleImage}
        onChange={onFileDrop}
        onClick={onUploadClick}
        accept={props.accept}
      />
      {props.withPreview ? this.renderPreview() : null}
    </div>
  );
};

EditImage.defaultProps = {
  accept: 'image/*',
  buttonClassName: '',
  // buttonStyles: {},
  acceptedExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
  buttonText: 'Choose images',
  buttonType: 'button',
  containerClassName: '',
  defaultImageList: '',
  errorClass: '',
  // errorStyle: {},
  // fileContainerStyle: {},
  fileSizeError: ' file size is too big',
  fileTypeError: ' is not a supported file extension',
  inputElementName: '',
  label: 'Max file size: 5mb, accepted: jpg|gif|png',
  labelClass: '',
  // labelStyles: {},
  maxFileCount: Infinity,
  maxFileSize: 5242880,
  onChange: () => {},
  singleImage: true,
  // style: {},
  withIcon: true,
  withLabel: true
  // withPreview: false,
};

export default EditImage;
