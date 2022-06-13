import React from "react";

export default function Leaderboard() {
  return (
    <div
      className="d-flex align-items-center justify-content-end"
      style={{ height: "500px" }}>
      <table className="table table-dark table-striped w-25">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>person1</td>
            <td>@p1</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>person2</td>
            <td>@p2</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>person3</td>
            <td>@p3</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
