import Skeleton from "@material-ui/lab/Skeleton";

const Question = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={"100%"} height={118} />
    </div>
  );
};

export default Question;
