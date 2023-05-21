from app import app, db
from models import Assessment, Option

def populate_database():
    if not Assessment.query.first():  # Check if there are any assessments already
        # Create frontend-assessments
        html5_fe = Assessment(icon="html5", bgrColor="#f38942", title="HTML")
        css3_fe = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True)
        bootstrap_fe = Assessment(icon="bootstrap", bgrColor="#513a75", title="Bootstrap", hasOptions=True)
        jquery_fe = Assessment(icon="jquery", bgrColor="#193556", title="jQuery")
        javascript_fe = Assessment(icon="javascript", bgrColor="#f0c022", title="JavaScript", hasOptions=True)
        angular_fe = Assessment(icon="angular", bgrColor="#de0031", title="Angular", hasOptions=True)

        db.session.add_all([html5_fe, css3_fe, bootstrap_fe, jquery_fe, javascript_fe, angular_fe])
    
        # Create options for frontend-assessments
        sass_fe_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3_fe)
        tailwind_fe_option = Option(icon="tailwindcss", bgrColor="#19b3ba", title="Tailwind CSS", assessment=bootstrap_fe)
        typescript_fe_option = Option(icon="typescript", bgrColor="#2f74c0", title="TypeScript", assessment=javascript_fe)
        react_fe_option = Option(icon="react", bgrColor="#4cbad8", title="React", assessment=angular_fe)
        vue_fe_option = Option(icon="vue", bgrColor="#41b883", title="Vue", assessment=angular_fe)
        svelte_fe_option = Option(icon="svelte", bgrColor="#ff3e00", title="Svelte", assessment=angular_fe)

        db.session.add_all([sass_fe_option, tailwind_fe_option, typescript_fe_option, react_fe_option, vue_fe_option, svelte_fe_option])

        # Create assessments for mean-assessments
        html5_mean = Assessment(icon="html5", bgrColor="#f38942", title="HTML")
        css3_mean = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True)
        angular_mean = Assessment(icon="angular", bgrColor="#de0031", title="Angular")
        node_mean = Assessment(icon="node", bgrColor="#3b7f3a", title="NodeJS")
        mongodb_mean = Assessment(icon="mongodb", bgrColor="#001e2b", title="MongoDB")

        db.session.add_all([html5_mean, css3_mean, angular_mean, node_mean, mongodb_mean])

        # Create options for mean-assessments
        sass_mean_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3_mean)
        
        db.session.add_all([sass_mean_option])

        db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        populate_database()

