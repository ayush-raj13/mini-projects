// IMPORTS -
import { ClimbingBoxLoader } from "react-spinners";
import "../styles/People.css";

const People = ({ value }) => {
  return (
    <>
      {value.length === 0 ? (
        <ClimbingBoxLoader color="#F45D01" className="loader" />
      ) : (
        <div className="container-fluid card__wrapper">
          <div className="row card__wrapper__row">
            <div className="col-md card__wrapper__col">
              {value.map((item) => {
                return (
                  <div className="card__container shadow" key={item.id}>
                    <div className="card__img">
                      <img
                        className="img-fluid"
                        src={item.avatar}
                        alt={item.id}
                      />
                    </div>
                    <div className="user__info">
                      <h5>
                        {item.first_name} {item.last_name}
                      </h5>
                    </div>

                    <div className="user__info">
                      <h5>{item.email}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default People;
