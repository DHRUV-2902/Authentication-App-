import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const DeleteAccountButton = () => {
  const handleDeleteAccount = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      // Delete the user account
      user
        .delete()
        .then(() => {
          // Account deleted successfully
          console.log('Account deleted');
        })
        .catch((error) => {
          // An error occurred
          console.error(error);
        });
    }
  };

  return (
    <button onClick={handleDeleteAccount}>
      Delete Account
    </button>
  );
};

export default DeleteAccountButton;
