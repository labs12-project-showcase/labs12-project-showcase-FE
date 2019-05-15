import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from 'material-datatable';
import { getTracks, updateTrack, deleteTrack } from '../adminActions.js';
import TrackEditModal from './TrackEditModal';
import TrackDeleteModal from './TrackDeleteModal';
import TrackAddModal from './TrackAddModal';

class TracksTable extends React.Component {
	componentDidMount() {
		this.props.getTracks();
	}

	render() {
		const column = [
			{
				name: 'Track',
				field: 'name',
				filter: true,
				sort: true
			},
			{
				name: '',
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
		];

		const options = {
			filterType: 'dropdown',
			selectableRows: false,
			showSelectedRowsToolbar: false,
			responsive: 'stacked'
		};

		return (
			<div className="tableContainer">
				<TrackAddModal />
				<MaterialDatatable
					title={'Tracks'}
					columns={column}
					data={this.props.tracks}
					options={options}
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

export default connect(
	mapStateToProps,
	{
		getTracks,
		updateTrack,
		deleteTrack
	}
)(TracksTable);
