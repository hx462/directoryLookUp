var companies = [
    {"id": 0, "name": "Google", "industry": "Internet, Computer software, Computer hardware", "department": "Corporate", "marketCap": "579.088", "dayRange": "824.20 - 829.00", "fiftytwoWeekRange": "663.28 - 841.95", "oneYearReturn": "17.53%", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "google", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "name": "Microsoft", "managerId": 0, "managerName": "James King", "reports": 2, "industry": "Computer software, Computer hardware, Consumer electronics, Digital distribution", "department": "Marketing", "marketCap": "499.353", "dayRange": "64.14 - 64.80", "fiftytwoWeekRange": "48.04 - 65.91", "oneYearReturn": "29.28%", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "microsoft", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "name": "Nvidia", "managerId": 0, "managerName": "James King", "reports": 0, "industry": "Semiconductors, Video games, Consumer electronics", "department": "Accounting", "marketCap": "54.687", "dayRange": "95.70 - 102.00", "fiftytwoWeekRange": "31.04 - 120.92", "oneYearReturn": "223.73%", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "nvidia", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {"id": 3, "name": "AMD", "managerId": 0, "managerName": "James King", "reports": 3, "industry": "Semiconductors", "department": "Engineering", "marketCap": "13.284", "dayRange": "13.86 - 14.32", "fiftytwoWeekRange": "1.98 - 14.50", "oneYearReturn": "582.13%", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "amd", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {"id": 4, "name": "Oracle", "managerId": 0, "managerName": "James King", "reports": 2, "industry": "Enterprise software, Cloud Computing", "department": "Sales", "marketCap": "177.099", "dayRange": "42.68 - 43.19", "fiftytwoWeekRange": "36.63 - 43.19", "oneYearReturn": "18.58%", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "oracle", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {"id": 5, "name": "IBM", "managerId": 3, "managerName": "John Williams", "reports": 0, "industry": "Cloud computing, Cognitive computing, Information technology", "department": "Engineering", "marketCap": "172.437", "dayRange": "179.89 - 181.49", "fiftytwoWeekRange": "130.90 - 182.79", "oneYearReturn": "42.24%", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "ibm", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {"id": 6, "name": "Qualcomm", "managerId": 3, "managerName": "John Williams", "reports": 0, "industry": "Telecommunications, Semiconductors", "department": "Engineering", "marketCap": "84.516", "dayRange": "56.50 - 57.23", "fiftytwoWeekRange": "49.67 - 71.62", "oneYearReturn": "15.88%", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "qualcomm", "twitterId": "@fakepgates", "source": "https://www.bloomberg.com/quote/QCOM:US"},
    {"id": 7, "name": "Apple", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "industry": "Computer hardware, Software, Consumer electronics, Digital distribution, Fabless Silicon Design, Corporate venture capital", "department": "Marketing", "marketCap": "716.992", "dayRange": "135.28 - 136.66", "fiftytwoWeekRange": "89.47 - 137.48", "oneYearReturn": "44.00%", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "apple", "twitterId": "@fakelwong", "source": "https://www.bloomberg.com/quote/AAPL:US"},
    {"id": 8, "name": "Intel", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "industry": "Semiconductors", "department": "Marketing", "marketCap": "172.714", "dayRange": "35.95 - 36.53", "fiftytwoWeekRange": "29.50 - 38.45", "oneYearReturn": "26.44%", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "intel", "twitterId": "@fakegdonovan", "source": "http://coenraets.org"},
    {"id": 9, "name": "Priceline Group", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "industry": "Travel, Technology", "department": "Sales", "marketCap": "80.512", "dayRange": "1,622.02 - 1,640.68", "fiftytwoWeekRange": "1,148.06 - 1,664.99", "oneYearReturn": "30.09%", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "priceline", "twitterId": "@fakekbyrne", "source": "http://coenraets.org"},
    {"id": 10, "name": "Expedia", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "industry": "Sales Representative", "department": "Sales", "marketCap": "17.851", "dayRange": "118.41 - 119.64", "fiftytwoWeekRange": "96.58 - 133.55", "oneYearReturn": "14.00%", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "expedia", "twitterId": "@fakeajones", "source": "https://www.bloomberg.com/quote/EXPE:US"},
    {"id": 11, "name": "Cisco", "managerId": 3, "managerName": "John Williams", "reports": 0, "industry": "Software Architect", "department": "Engineering", "marketCap": "171.870", "dayRange": "33.80 - 34.32", "fiftytwoWeekRange": "25.81 - 34.32", "oneYearReturn": "34.60%", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "cisco", "twitterId": "@fakeswells", "source": "http://coenraets.org"}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(companies.filter(function(company) {
            return (company.name).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(companies);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(companies[id]);
};