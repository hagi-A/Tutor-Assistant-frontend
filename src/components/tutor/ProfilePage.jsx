import React, { useState } from "react";
import Sidebar from "./tutorDashboard/Sidebar";
import "./profile.css";

const ProfilePage = () => {
  const initialProfileData = {
    name: "Tutor Name",
    email: "tutor@email.com",
    profilePicture: "https://via.placeholder.com/150",
    bio: "This is the tutor's bio. Edit this to add your bio information.",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({ ...initialProfileData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setProfileData({ ...profileData, profilePicture: imageUrl });
  };

  const handleEditToggle = () => {
    if (!isEditing) {
      setProfileData({ ...initialProfileData }); // Load original info when clicking Edit
    }
    setIsEditing(!isEditing);
  };

  const handleProfileUpdate = () => {
    // Here, you would send the updated profile data to the server
    // For demonstration, I'll just log the updated profile data
    console.log("Updated Profile Data:", profileData);
    setIsEditing(false); // Exit edit mode after update
  };

  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border h-[100vh] overflow-scroll">
          <div className="p-4 profile-container">
            <h1 className="text-2xl font-bold mb-4">Tutor Profile</h1>
            <div className="flex flex-col items-center space-y-4 mb-4">
              <div className={`profile-picture ${isEditing ? "editable" : ""}`}>
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                {isEditing ? (
                  <label className="upload-label">
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                ) : null}
              </div>
              <div className="mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                  />
                ) : (
                  <p>{profileData.name}</p>
                )}
              </div>
              <div className="mb-4">
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                  />
                ) : (
                  <p>{profileData.email}</p>
                )}
              </div>
              <div className="mb-4">
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    className="border p-2 w-full h-32"
                  />
                ) : (
                  <p>{profileData.bio}</p>
                )}
              </div>
            </div>
            <div className="flex">
              {isEditing ? (
                <button
                  onClick={handleProfileUpdate}
                  className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="bg-green-500 text-white py-2 px-4 rounded mr-4"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => setProfileData({ ...initialProfileData })}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
