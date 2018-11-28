import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Card, Row, Col } from "antd";
import { submit, setKeyword } from "./redux";

const enhance = connect(
  state => state.search,
  { submit, setKeyword }
);

class Search extends Component {
  onSubmit = async value => {
    try {
      const result = await this.props.submit(this.props.keyword);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { keyword, results, success, setKeyword } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Search photo</h1>
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <Input.Search
            placeholder="input search text"
            style={{ width: 300 }}
            onSearch={this.onSubmit}
            onChange={e => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>
        <br />
        <div className="gutter-example">
          <Row gutter={24}>
            {success
              ? results.map(photo => (
                  <Col key={photo.id} className="gutter-row" span={6}>
                    <Card
                      style={{ height: "200px" }}
                      hoverable
                      cover={
                        <img alt={photo.description} src={photo.urls.small} />
                      }
                    />
                  </Col>
                ))
              : ""}
          </Row>
        </div>
      </div>
    );
  }
}

export default enhance(Search);
