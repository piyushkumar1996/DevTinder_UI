import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about } = user;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {`${firstName} ${lastName}`}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h4>{`${age} ${gender}`}</h4>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Interested</button>
            <button className="btn btn-secondary">Not Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
