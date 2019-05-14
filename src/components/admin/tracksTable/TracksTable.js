import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { getTracks, updateTrack, deleteTrack } from '../adminActions.js';
import TrackEditModal from './TrackEditModal'
import TrackDeleteModal from './TrackDeleteModal'


class TracksTable extends React.Component {

    componentDidMount() {
        this.props.getTracks();
    }

    render() {
        const column = [
            {
                name: "Track",
                field: "name",
                filter: true,
                sort: true,
            },
              {
                name: "",
                options: {
                    customBodyRender: value => {
                        return (
                            <div className="modals-container">
                                <TrackEditModal value={value} />
                                <TrackDeleteModal value={value} />
                            </div>
                        );
                    }
                }
              }
        ]

        return (

            <div className="tableContainer">
                <MaterialDatatable
                    title={"Admin Tracks Table"}
                    columns={column}
                    data={this.props.tracks}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tracks: state.admin.tracks
    };
};

export default connect(mapStateToProps, {
    getTracks,
    updateTrack,
    deleteTrack
})(TracksTable);