import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { BASE_URL } from "../config";
import { addUser } from "../redux/userReducer";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const { firstName, lastName, age = "", gender = "male", about } = user || {};
  const [userDetail, setUserDetail] = useState({
    firstName,
    lastName,
    age,
    gender,
    about,
  });
  console.log("userDetail", userDetail);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  let timer = useRef(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          user: { ...userDetail },
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data?.data?.user));
      setShowToast(true);
      timer.current = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.data);
      console.error("profile update failed", err?.data);
    }
  };

  const handleChange = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]:
        e.target.name === "age" ? parseInt(e.target.value) : e.target.value,
    });
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm mx-auto my-20">
        {user && (
          <div className="card-body items-center text-left">
            <h2 className="card-title">Login</h2>
            <div className="flex flex-col gap-2 my-5">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">firstName</legend>
                <input
                  name="firstName"
                  type="text"
                  className="input"
                  value={userDetail.firstName}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">lastName</legend>
                <input
                  name="lastName"
                  type="text"
                  className="input"
                  value={userDetail.lastName}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">age</legend>
                <input
                  name="age"
                  type="text"
                  className="input"
                  value={userDetail.age}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <select
                  name="gender"
                  className="select"
                  value={userDetail.gender}
                  onChange={handleChange}
                >
                  <option disabled={true}>Select a gender</option>
                  <option>male</option>
                  <option>female</option>
                  <option>others</option>
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <textarea
                  className="textarea h-24"
                  name="about"
                  value={userDetail.about}
                  onChange={handleChange}
                ></textarea>
              </fieldset>
            </div>

            <div className="card-actions">
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        )}
        {error && <p className="text-red-300">{error}</p>}
      </div>
      {showToast ? (
        <>
          <div className="toast toast-top toast-start">
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditProfile;
