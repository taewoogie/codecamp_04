// Initialize Cloud Firestore through Firebase

const LoginUI = () => {
  const firebase = require("firebase");
  const firebaseui = require("firebaseui");

  // Initialize the FirebaseUI Widget using Firebase.
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start("#firebaseui-auth-container", {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    // Other config options...
  });

  return (
    <>
      <div>Firebase 로그인 하기</div>
    </>
  );
};
export default LoginUI;
