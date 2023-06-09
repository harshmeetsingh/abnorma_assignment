import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

DataTable.propTypes = {
  top5MaliciousWebsites: PropTypes.array,
};

function DataTable({ top5MaliciousWebsites }) {
  return (
    <div className="centre-div">
      <table className="data-table">
        <thead>
          <tr>
            <th>Top 5 malicious Websites:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Domain</th>
            <th className="data-table-threat-metrics">% of threats</th>
            <th className="data-table-threat-metrics"># of threats</th>
          </tr>
          {top5MaliciousWebsites ? (
            top5MaliciousWebsites.map((it) => {
              return (
                <tr key={it.id}>
                  <td>{it.id}</td>
                  <td className="data-table-threat-metrics">{it.percentage}</td>
                  <td className="data-table-threat-metrics">{it.count}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Please select a customer</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
