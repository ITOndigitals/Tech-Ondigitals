import classes from "./LoadingSpinnerOverlay.module.scss";
const LoadingSpinnerOverlay = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default LoadingSpinnerOverlay;
