import React from 'react';

import './College.css';

const College = ({ college_name, promoted, discount, original_fees, discounted_fees, fees_cycle, image, ranking, tags, amenties, rating, rating_remarks, famous_nearest_places, nearest_place, offertext }) => {
    return (
        <div className="college">
            <div className="banner">
                {
                    promoted ?
                        <>
                            <div className="promotion-flag"></div>
                            <span className="promotion-label">Promoted</span>
                        </>
                        : null
                }
                <div className="rating">
                    <div><span className="number">{rating}</span>/5</div>
                    <div>{rating_remarks}</div>
                </div>
                <div className="banner-footer">
                    <div className="tags">
                        {
                            tags.map(tag => <span key={tag} className="tag">{tag.slice(0, 1).toUpperCase() + tag.slice(1)}</span>)
                        }
                    </div>
                    <div className="ranking">#{ranking}</div>
                </div>
            </div>
            <div className="details">
                <div className="college-info">
                    <div className="name-rating">
                        <h2>{college_name}</h2>
                        <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="nearest-place">
                        {
                            nearest_place.map((place, idx) => {
                                if (idx === 0) {
                                    return (<React.Fragment key={idx}><strong>{place}</strong> | </React.Fragment>);
                                } else if (idx === nearest_place.length - 1) {
                                    return (<React.Fragment key={idx}><strong className="grey-text">{place}</strong></React.Fragment>);
                                } else {
                                    return (<React.Fragment key={idx}><strong className="grey-text">{place}</strong> | </React.Fragment>);
                                }
                            })
                        }
                    </div>
                    <div className="famous-nearest-place">
                        <strong className="green-text">93% Match :</strong>&nbsp;
                        {
                            famous_nearest_places.replace("Kms", "kms").split(",").map((place, idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <strong>{place.split("kms")[0]}kms<span className="grey-text"> {place.split("kms")[1]}</span></strong>
                                        {
                                            idx !== famous_nearest_places.replace("Kms", "kms").split(",").length - 1
                                                ? <span>,&nbsp;</span>
                                                : null
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="pricing">
                    <div className="price">
                        <del className="actual-price">&#8377; {original_fees}</del>
                        <span className="discount-tag"></span>
                        <span className="discount">{discount}</span>
                    </div>
                    <h1 className="discounted-price">
                        &#8377; {discounted_fees}
                    </h1>
                    <div className="fees-cycle">{fees_cycle}</div>
                </div>
            </div>
            <div className="messages">
                <div className="discount-message">
                    <strong>Flat Rs <span className="green-text">2,000</span> off + upto Rs <span
                        className="green-text">500</span> wallet! to avail... <span
                            className="green-text">LOGIN</span>
                    </strong>
                </div>
                <div className="amenities-message">
                    {
                        amenties.map((am, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <span className="green-text"> {am} </span>
                                    <span>&nbsp;&nbsp;</span>
                                    {
                                        idx !== amenties.length - 1 ?
                                            <React.Fragment key={idx}>
                                                <span className="dot"></span>
                                                <span>&nbsp;&nbsp;</span>
                                            </React.Fragment>
                                            : null
                                    }
                                </React.Fragment>)
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default College;