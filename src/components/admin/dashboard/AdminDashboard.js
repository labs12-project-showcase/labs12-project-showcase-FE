// import react from 'react';



// <div className="subNav">
//               <nav>
//                 <NavLink exact to={`/student/profile/${this.props.id}`}>
//                   <i className="far fa-id-card" /> Your Profile
//                 </NavLink>
//                 <NavLink exact to="/student/new-project">
//                   <i className="fas fa-plus" /> Add New Project
//                 </NavLink>
//                 {this.props.location.pathname.match(
//                   /\/student\/project-view\/\d+/g
//                 ) &&
//                   this.checkOwner(this.props.project_students) && (
//                     <NavLink
//                       exact
//                       to={`/student/edit-project/${this.props.project_id}`}
//                     >
//                       <i className="fas fa-plus" /> Edit Project
//                     </NavLink>
//                   )}
//                 <NavLink exact to="/profile-quick-start">
//                   <i className="fas fa-user-edit" /> Edit Profile
//                 </NavLink>
//               </nav>
//             </div>