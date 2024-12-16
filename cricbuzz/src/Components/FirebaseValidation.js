import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";
import Login from "./Login";

const Firevalidation = () => {
  const [presentUser, setPresentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setPresentUser(null);
      }
    });
    
    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {presentUser ? (
        <>
          <p className="position-relative user_email" onClick={openModal}>
            {presentUser.email.charAt(0).toUpperCase()}
          </p>
          {isModalOpen && (
            <div className="p-4 bg-light text-dark rounded-3 logoutcricbuzz">
                <span onClick={closeModal} className="btn-close close_symbol"></span>
                <p className="text-uppercase text-overflow">{presentUser.email}</p>
              <button
                onClick={() => {
                  auth.signOut();
                  closeModal();
                }}
                className="btn btn-outline-danger btn-sm"
              >
                Log Out &nbsp; <i class="fa-solid fa-right-from-bracket logout_icon"></i>
              </button>
              
            </div>
          )}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Firevalidation;