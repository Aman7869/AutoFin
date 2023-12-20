import { Button, PageError, PageNotFoundPara, NumberHeading } from "./styles";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <PageError>
      <NumberHeading>404</NumberHeading>
      <PageNotFoundPara>Oops,this page not found</PageNotFoundPara>
      <Button onClick={back}>goto Home</Button>
    </PageError>
  );
};

export default PageNotFound;
