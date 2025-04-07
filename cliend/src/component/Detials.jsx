import React from 'react'
import { RxCross2 } from "react-icons/rx";
const Detials = ({ prodname, fileImage, type, status, breid, breidContent, closeDetails, color, update, heading, icon }) => {
  return (
    <>
      <div className="details-tab container">
        <div className="details_rows">
          <div className="detail-head">
            <h2>{heading}</h2>
            <button onClick={closeDetails}><RxCross2 /></button>
          </div>
          <div>
            <h1>{prodname}</h1>
            {fileImage != null ? <div className='produImg'><img className='w-100' src={fileImage} alt="images" /></div> : null}
            <div className="detail-info">
              <div className="order-desc">
                <p><span>Type</span><span>:</span> <span>{type}</span></p>
                <p><span>Status</span><span>:</span> <span>{status}</span></p>
                <hr />
              </div>
              {!update ? null : <div className="order-desc">
                <p><span>Latest Update</span><span>:</span> <span>{update}</span></p>
              </div>}
              {color != null && icon != null ? <div className="order-desc">
                <p><span>Color :</span><span>:</span> <span>{color}</span></p>
                <p><span>Icon :</span><span>:</span> <span>{icon}</span></p>
                <hr />
              </div> : null}
              {breid != null ?
                <div className="order-desc">
                  <p><span>Breird Content</span><span>:</span> <span>{breid}</span></p>
                  <hr />
                </div>
                : null}
              <div className="order-desc">
                <p><span>Full Content</span><span>:</span></p>
                <p className='paracol'>{breidContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detials