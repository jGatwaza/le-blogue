import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "bootstrap";
import PropTypes from "prop-types";
import FormImage from "../FormImage";
import { useDispatch, useSelector } from "react-redux";
import { updateUser as updateUserAction } from "../../features/authSlice";
import SuccessToast from "../SuccessToast";

export default function EditUserModal({ user, onClose }) {
  const modalEl = document.getElementById("editUserModal");
  const [userImage, setUserImage] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const dispatch = useDispatch();
  const editUserModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  const userDataState = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    if (user) {
      setUserData(user);
      setUserImage(user.image);
      editUserModal?.show();
    }
  }, [editUserModal, user]);

  useEffect(() => {
    if (userDataState) {
      setUserData(userDataState);
      setUserImage(userDataState.image);
    }
  }, [userDataState]);

  const resetUserData = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
    });
    setUserImage("");
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("firstname", userData.firstName);
    formData.append("lastname", userData.lastName);
    formData.append("email", userData.email);
    formData.append("bio", userData.bio);
    if (userData.image) {
      formData.append("image", userData.image);
    }
    return formData;
  };

  const onImageChange = (e) => {
    if (e?.target?.files?.length) {
      const file = e.target.files[0];
      setUserImage(URL.createObjectURL(file));
      setUserData({ ...userData, image: file });
    }
  };

  const onSubmit = async (e) => {
    e?.preventDefault();
    if (isFormValid()) {
      try {
        const userForm = buildFormData();
        await dispatch(
          updateUserAction({ userId: user._id, userData: userForm })
        ).unwrap();
        setShowSuccessToast(true);
        resetUserData();
        editUserModal?.hide();
        window.location.reload();
      } catch (error) {
        console.error("Failed to update user:", error);
      }
    }
  };

  const onCloseModal = () => {
    resetUserData();
    onClose();
    editUserModal.hide();
  };

  const isFormValid = () => {
    const form = document.getElementById("userForm");
    form?.classList?.add("was-validated");
    return form?.checkValidity();
  };

  return (
    <>
      <div
        className="modal fade"
        id="editUserModal"
        aria-labelledby="editUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editUserModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={onCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <form id="userForm" noValidate>
                <FormImage image={userImage} onChange={onImageChange} />
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={userData?.firstName}
                    onChange={(e) => {
                      setUserData({ ...userData, firstName: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={userData?.lastName}
                    onChange={(e) => {
                      setUserData({ ...userData, lastName: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={userData?.email}
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                    required
                  ></input>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    value={userData?.bio}
                    onChange={(e) => {
                      setUserData({ ...userData, bio: e.target.value });
                    }}
                    required
                  ></textarea>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={onSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuccessToast
        show={showSuccessToast}
        message="User updated successfully!"
        onClose={() => setShowSuccessToast(false)}
      />
    </>
  );
}

EditUserModal.propTypes = {
  user: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};
