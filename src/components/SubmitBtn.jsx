import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, icon }) => {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  
  return (
    <div>
      <div className="card-actions mt-6">
        <button className="btn btn-block btn-primary" type="submit">
          {text}{icon}
        </button>
      </div>
    </div>
  );
};
export default SubmitBtn;
