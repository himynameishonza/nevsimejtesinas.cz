export default class Disease extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id={this.props.name}
            className={
              "section section--disease" +
              " " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="section__content">
              <div className="container container--narrow">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="container container--narrow container--btn">
                <a
                  className="btn"
                  onClick={() =>
                    this.props.onShareClick(
                      this.props.name,
                      this.props.copyTitle
                    )
                  }
                >
                  Oslabit Nemoc
                </a>
              </div>
            </div>{" "}
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
