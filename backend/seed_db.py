from app import app, db
from models import Assessment, Option

def populate_database():
    if not Assessment.query.first():  # Check if there are any assessments already
        # Create frontend-assessments
        html5 = Assessment(icon="html5", bgrColor="#f38942", title="HTML", category="frontend")
        css3 = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True, category="frontend")
        bootstrap = Assessment(icon="bootstrap", bgrColor="#513a75", title="Bootstrap", hasOptions=True, category="frontend")
        jquery = Assessment(icon="jquery", bgrColor="#193556", title="jQuery", category="frontend")
        javascript = Assessment(icon="javascript", bgrColor="#f0c022", title="JavaScript", hasOptions=True, category="frontend")
        angular = Assessment(icon="angular", bgrColor="#de0031", title="Angular", hasOptions=True, category="frontend")

        db.session.add_all([html5, css3, bootstrap, jquery, javascript, angular])
    
        # Create options for frontend-assessments
        sass_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3, category="frontend")
        tailwind_option = Option(icon="tailwindcss", bgrColor="#19b3ba", title="Tailwind CSS", assessment=bootstrap, category="frontend")
        typescript_option = Option(icon="typescript", bgrColor="#2f74c0", title="TypeScript", assessment=javascript, category="frontend")
        react_option = Option(icon="react", bgrColor="#4cbad8", title="React", assessment=angular, category="frontend")
        vue_option = Option(icon="vue", bgrColor="#41b883", title="Vue", assessment=angular, category="frontend")
        svelte_option = Option(icon="svelte", bgrColor="#ff3e00", title="Svelte", assessment=angular, category="frontend")

        db.session.add_all([sass_option, tailwind_option, typescript_option, react_option, vue_option, svelte_option])

        # Create assessments for mean-assessments
        html5 = Assessment(icon="html5", bgrColor="#f38942", title="HTML", category="mean")
        css3 = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True, category="mean")
        angular = Assessment(icon="angular", bgrColor="#de0031", title="Angular", category="mean")
        node = Assessment(icon="node", bgrColor="#3b7f3a", title="NodeJS", category="mean")
        mongodb = Assessment(icon="mongodb", bgrColor="#001e2b", title="MongoDB", category="mean")

        db.session.add_all([html5, css3, angular, node, mongodb])

        # Create options for mean-assessments
        sass_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3, category="mean")
        
        db.session.add_all([sass_option])

        db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        populate_database()

