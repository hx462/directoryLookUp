var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var SearchBar = React.createClass({
    searchHandler: function() {
        this.props.searchHandler(this.refs.searchKey.getDOMNode().value);
    },
    render: function () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" onChange={this.searchHandler} value={this.props.searchKey}/>
            </div>

        );
    }
});

var CompanyListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#companies/" + this.props.company.id}>
                    <img className="media-object small pull-left" src={"pics/" + this.props.company.pic + ".jpg" }/>
                    {this.props.company.name}
                    <p>{this.props.company.industry}</p>
                </a>
            </li>
        );
    }
});

var CompanyList = React.createClass({
    render: function () {
        var items = this.props.companies.map(function (company) {
            return (
                <CompanyListItem key={company.id} company={company} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="Company Directory" back="false"/>
                <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
                <div className="content">
                    <CompanyList companies={this.props.companies}/>
                </div>
            </div>
        );
    }
});

var CompanyPage = React.createClass({
    getInitialState: function() {
        return {company: {}};
    },
    componentDidMount: function() {
        this.props.service.findById(this.props.companyId).done(function(result) {
            this.setState({company: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="Company" back="true"/>
                <div className="card">
                    <ul className="table-view">
                        <li className="table-view-cell media">
                            <img className="media-object big pull-left" src={"pics/" + this.state.company.pic + ".jpg" }/>
                            <h1>{this.state.company.name}</h1>
                            <p>{this.state.company.industry}</p>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.state.company.marketCap} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                MARKET CAP (B USD)
                                    <p>{this.state.company.marketCap}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.state.company.dayRange} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                DAY RANGE
                                    <p>{this.state.company.dayRange}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"sms:" + this.state.company.fiftytwoWeekRange} className="push-right">
                                <span className="media-object pull-left icon icon-sms"></span>
                                <div className="media-body">
                                52WK RANGE
                                    <p>{this.state.company.fiftytwoWeekRange}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"mailto:" + this.state.company.oneYearReturn} className="push-right">
                                <span className="media-object pull-left icon icon-email"></span>
                                <div className="media-body">
                                1 YR RETURN
                                    <p>{this.state.company.oneYearReturn}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            companies: []
        }
    },
    searchHandler: function(searchKey) {
        companyService.findByName(searchKey).done(function(companies) {
            this.setState({
                searchKey:searchKey,
                companies: companies,
                pages: [<HomePage key="list" searchHandler={this.searchHandler} searchKey={searchKey} companies={companies}/>]});
        }.bind(this));
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="list" searchHandler={this.searchHandler} searchKey={this.state.searchKey} companies={this.state.companies}/>);
        }.bind(this));
        router.addRoute('companies/:id', function(id) {
            this.slidePage(<CompanyPage key="details" companyId={id} service={companyService}/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);