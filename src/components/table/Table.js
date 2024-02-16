import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.png';
import image4 from '../../images/4.png';

const Table = () => {

    const data = [{
        name: "AMZN",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "TSLA",
        sales: 200,
        rate: "-0.25 %",
        risk: "High Risk"
    }, {
        name: "ABQQ",
        sales: 200,
        rate: "-0.25 %",
        risk: "High Risk"
    }, {
        name: "MSFT",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "PYPL",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "NFLX",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "NFLX",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "NFLX",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "NFLX",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }, {
        name: "NFLX",
        sales: 200,
        rate: "-0.25 %",
        risk: "Low Risk"
    }];

    return (
        <div className="card_container">
            <div className="card_body">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="card_content">
                                <div>
                                    <img src={image1} alt="logo" style={{ width: "20px", height: "20px",marginRight:"10px" }} />
                                    {item.name}</div>
                                <div>
                                    <img src={image2} alt="logo" style={{ width: "20px", height: "20px",marginRight:"10px" }}/>
                                    {item.sales}</div>
                                <div>
                                    <img src={image3} alt="logo" style={{ width: "20px", height: "20px",marginRight:"10px" }}/>
                                    {item.rate}</div>
                                <div>
                                    <img src={image4} alt="logo" style={{ width: "20px", height: "20px",marginRight:"10px" }}/>
                                    {item.risk}</div>
                            </div>
                        );
                    })
                }
            </div>
            
        </div >
    );
}

export default Table;