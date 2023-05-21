from extensions import db
from models import User,Assessment, Option
from app import create_app

app = create_app()

def populate_database():

    categories = ["users","frontend", "mean", "mern", "backend", "fullstack"]

    for category in categories:
        # Delete existing records for this category
        Assessment.query.filter_by(category=category).delete()
        Option.query.filter_by(category=category).delete()
        db.session.commit()

        if category == "users":
            User.query.delete()  # Truncate the user table

            elona = User(username="elonamuskina", email="elonamuskina@gmail.com", password_hash="elona", category="users")
            chuck = User(username="chucknorris", email="chuck@norris.com", password_hash="chuck", category="users")

            db.session.add_all([elona, chuck])
            db.session.commit()

        elif category == "frontend":
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
            db.session.commit()

        elif category == "mean":
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

        elif category == "mern":
            # Create assessments for mern-assessments
            html5 = Assessment(icon="html5", bgrColor="#f38942", title="HTML", category="mern")
            css3 = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True, category="mern")
            react = Assessment(icon="react", bgrColor="#4cbad8", title="React", category="mern")
            node = Assessment(icon="node", bgrColor="#3b7f3a", title="NodeJS", category="mern")
            mongodb = Assessment(icon="mongodb", bgrColor="#001e2b", title="MongoDB", category="mern")

            db.session.add_all([html5, css3, react, node, mongodb])

            # Create options for mern-assessments
            sass_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3, category="mern")
            
            db.session.add_all([sass_option])
            db.session.commit()

        elif category == "backend":
            # Create assessments for backend-assessments
            node = Assessment(icon="node", bgrColor="#3b7f3a", title="NodeJS", hasOptions=True, category="backend")
            php = Assessment(icon="php", bgrColor="#4b568c", title="PHP", hasOptions=True, category="backend")
            django = Assessment(icon="django", bgrColor="#092e20", title="Django", hasOptions=True, category="backend")
            mongodb = Assessment(icon="mongodb", bgrColor="#001e2b", title="MongoDB", category="backend")

            db.session.add_all([node, php, django, mongodb])

            # Create options for backend-assessments
            python_option = Option(icon="python", bgrColor="#356895", title="Python", assessment=node, category="backend")
            java_option = Option(icon="java", bgrColor="#131f3f", title="Java", assessment=node, category="backend")
            go_option = Option(icon="go", bgrColor="#67d7e1", title="Go", assessment=node, category="backend")
            csharp_option = Option(icon="csharp", bgrColor="#92458c", title="C#", assessment=node, category="backend")
            ruby_option = Option(icon="ruby", bgrColor="#eb5745", title="Ruby", assessment=php, category="backend")
            cplusplus_option = Option(icon="cplusplus", bgrColor="#659bd3", title="C++", assessment=php, category="backend")
            dotnet_option = Option(icon="dot-net", bgrColor="#6d409d", title=".NET", assessment=django, category="backend")
            
            db.session.add_all([python_option, java_option, go_option, csharp_option, ruby_option, cplusplus_option, dotnet_option])

            db.session.commit()

        elif category == "fullstack":
            # Create assessments for fullstack-assessments
            html5 = Assessment(icon="html5", bgrColor="#f38942", title="HTML", category="fullstack")
            css3 = Assessment(icon="css3", bgrColor="#349edc", title="CSS", hasOptions=True, category="fullstack")
            bootstrap = Assessment(icon="bootstrap", bgrColor="#513a75", title="Bootstrap", hasOptions=True, category="fullstack")
            javascript = Assessment(icon="javascript", bgrColor="#f0c022", title="JavaScript", hasOptions=True, category="fullstack")
            angular = Assessment(icon="angular", bgrColor="#de0031", title="Angular", hasOptions=True, category="fullstack")
            node = Assessment(icon="node", bgrColor="#3b7f3a", title="NodeJS", hasOptions=True, category="fullstack")
            php = Assessment(icon="php", bgrColor="#4b568c", title="PHP", hasOptions=True, category="fullstack")
            django = Assessment(icon="django", bgrColor="#092e20", title="Django", hasOptions=True, category="fullstack")
            mongodb = Assessment(icon="mongodb", bgrColor="#001e2b", title="MongoDB", category="fullstack")

            db.session.add_all([html5, css3, bootstrap, javascript, angular, node, php, django, mongodb])

            # Create options for fullstack-assessments
            sass_option = Option(icon="sass", bgrColor="#cf649a", title="SCSS", assessment=css3, category="fullstack")
            tailwind_option = Option(icon="tailwindcss", bgrColor="#19b3ba", title="Tailwind CSS", assessment=bootstrap, category="fullstack")
            typescript_option = Option(icon="typescript", bgrColor="#2f74c0", title="TypeScript", assessment=javascript, category="fullstack")
            react_option = Option(icon="react", bgrColor="#4cbad8", title="React", assessment=angular, category="fullstack")
            vue_option = Option(icon="vue", bgrColor="#41b883", title="Vue", assessment=angular, category="fullstack")
            svelte_option = Option(icon="svelte", bgrColor="#ff3e00", title="Svelte", assessment=angular, category="fullstack")
            python_option = Option(icon="python", bgrColor="#356895", title="Python", assessment=node, category="fullstack")
            java_option = Option(icon="java", bgrColor="#131f3f", title="Java", assessment=node, category="fullstack")
            go_option = Option(icon="go", bgrColor="#67d7e1", title="Go", assessment=node, category="fullstack")
            csharp_option = Option(icon="csharp", bgrColor="#92458c", title="C#", assessment=node, category="fullstack")
            ruby_option = Option(icon="ruby", bgrColor="#eb5745", title="Ruby", assessment=php, category="fullstack")
            cplusplus_option = Option(icon="cplusplus", bgrColor="#659bd3", title="C++", assessment=php, category="fullstack")
            dotnet_option = Option(icon="dot-net", bgrColor="#6d409d", title=".NET", assessment=django, category="fullstack")
            
            db.session.add_all([sass_option, tailwind_option, typescript_option, react_option, vue_option, svelte_option,python_option, java_option, go_option, csharp_option, ruby_option, cplusplus_option, dotnet_option])

            db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        populate_database()

