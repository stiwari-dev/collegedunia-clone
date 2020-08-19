import React from 'react';

import './CollegesList.css';
import COLLEGES from '../../mock-data/colleges';
import College from '../../component/College/College';

class CollegesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collegesCount: 10,
            loading: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && (this.state.collegesCount <= COLLEGES.length)) {
            this.addCollegesCount();
        }
    };

    addCollegesCount = () => {
        this.setState({ loading: true }, () => {
            setTimeout(() => {
                this.setState(prevState => {
                    return { collegesCount: prevState.collegesCount + 10, loading: false }
                });
            }, 1000);
        });
    };

    render() {
        const { collegesCount, loading } = this.state;
        return (
            <>
                <div className="colleges-grid">
                    {COLLEGES.slice(0, collegesCount).map(col => <College key={col.college_name} {...col} />)}
                </div>
                {loading ? <div className="loader">Loading...</div> : null}
            </>
        );
    }
};

export default CollegesList;