import "./AddServices.scss";

const AddServices = () => {
  return (
    <div className="addservices">
      <div className="container">
        <h1>Add new Service</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="I will do something I'm really good at"
            />
            <label htmlFor="category"></label>
            <select name="cats" id="cats">
              <option value="directtaxation">Direct Taxation</option>
              <option value="auditing">Auditing</option>
              <option value="indirecttaxation">Indirect taxation</option>
              <option value="financialservices">Financial Services</option>
              <option value="companylaw">Company Law</option>
              <option value="accounting">Accounting</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Image</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Give Brif discription about your service to clients"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="Service Title.." />
            <label htmlFor="">Short Desc</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short Desc.."
            ></textarea>
            <label htmlFor="">Delivery Time</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="Preparation of Income Tax Return" />
            <input
              type="text"
              placeholder="Consultancy in income tax matters & tax planning"
            />
            <input type="text" placeholder="Income tax appeals" />
            <input type="text" placeholder="International taxation services" />
            <input type="text" placeholder="Transfer pricing" />
            <input type="text" placeholder="DTAA Matters and form filing" />
            <input
              type="text"
              placeholder="TDS & with holding taxation and many more…."
            />

            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
