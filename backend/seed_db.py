from app import app, db
from models import Assessment, Option

def populate_database():
    if not Assessment.query.first():  # Check if there are any assessments already
        # Create assessments
        html5 = Assessment(icon="html5", bgrColor="#f38942", title="HTML")
        css3 = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True)
        bootstrap = Assessment(icon="bootstrap", bgrColor="#513a75", title="Bootstrap", hasOptions=True)
        jquery = Assessment(icon="jquery", bgrColor="#193556", title="jQuery")
        javascript = Assessment(icon="javascript", bgrColor="#f0c022", title="JavaScript", hasOptions=True)
        angular = Assessment(icon="angular", bgrColor="#de0031", title="Angular", hasOptions=True)

        db.session.add_all([html5, css3, bootstrap, jquery, javascript, angular])
    
        # Create options
        sass_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3)
        tailwind_option = Option(icon="tailwindcss", bgrColor="#19b3ba", title="Tailwind CSS", assessment=bootstrap)
        typescript_option = Option(icon="typescript", bgrColor="#2f74c0", title="TypeScript", assessment=javascript)
        react_option = Option(icon="react", bgrColor="#4cbad8", title="React", assessment=angular)
        vue_option = Option(icon="vue", bgrColor="#41b883", title="Vue", assessment=angular)
        svelte_option = Option(icon="svelte", bgrColor="#ff3e00", title="Svelte", assessment=angular)

        db.session.add_all([sass_option, tailwind_option, typescript_option, react_option, vue_option, svelte_option])

        db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        populate_database()

