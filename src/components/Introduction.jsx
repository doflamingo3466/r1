
function Introduction() {
    let name = "Muhammad Abid Subhani";
    let education = "BS Information Technology";
    let university = "The Superior University";

    return (
        <div className="container">
            <div className="profile-card">

                <span className="welcome">WELCOME TO MY PROFILE</span>

                <h1>{name}</h1>

                <h4>{education}</h4>

                <p className="university">{university}</p>

                <div className="line"></div>

                <h3>About Me</h3>

                <p>
                    I am a student interested in web development
                    and software development. Currently, I am
                    learning React and improving my programming skills.
                </p>

                <h3>My Skills</h3>

                <ul className="skill-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>SQL</li>
                </ul>

            </div>
        </div>
    );
}

export default Introduction;
