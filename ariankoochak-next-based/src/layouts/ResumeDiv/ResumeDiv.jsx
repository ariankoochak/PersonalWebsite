

export default function ResumeDiv({data}) {
    return (
        <div className={`common-styles-div resume-div persian-blue-div-color`}>
            <h2 className={`divs-title persian-blue-color`}>Resume</h2>
            <div className="resume-data">
                <div className="age">
                    <span className="title">Age</span>
                    <span className="value">{data.age} Years</span>
                </div>
                <div className="city">
                    <span className="title">Address</span>
                    <span className="value">{data.address}</span>
                </div>
                <div className="military">
                    <span className="title">Military service status</span>
                    <span className="value">{data.militaryServiceStatus}</span>
                </div>
                <div className="email">
                    <span className="title">Email</span>
                    <span className="value">{data.email}</span>
                </div>
                <div className="education">
                    <span className="title">Degree of Education</span>
                    <span className="value">{data.degree}<br/>{data.university}</span>
                </div>
            </div>
        </div>
    );
}