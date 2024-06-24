import  Header  from "../components/Header";
import  Footer  from "../components/Footer";
import FormAddProject from "../components/FormAddProject";
import "../styles/AddProject.scss"

const AddProject = () => {
    return (
        <div className="addProject">
            <Header  />
            <FormAddProject />
            <Footer />
            
        </div>
    );
};

export default AddProject;