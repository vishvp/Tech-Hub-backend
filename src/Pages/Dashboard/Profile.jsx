import React from "react";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="avatar">👤</div>
                <h2>User Profile</h2>
            </div>

            <div className="profile-details">
                <p>
                    <strong>Name:</strong> <span>Admin User</span>
                </p>
                <p>
                    <strong>Email:</strong> <span>admin@pptechhub.com</span>
                </p>
                <p>
                    <strong>Role:</strong> <span>Administrator</span>
                </p>
                <p>
                    <strong>Status:</strong> <span>Active</span>
                </p>
            </div>
        </div>
    );
};

export default Profile;
