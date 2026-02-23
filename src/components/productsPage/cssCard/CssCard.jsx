import React from "react";
import styles from "./CssCard.module.css";

const CssCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src="/images/manproducts/img7.png"
          className={styles.leftImage}
          alt=""
        />
        <h2 className={styles.imageHeader}>CSS</h2>
      </div>
      <div className={styles.right}>
        <h2 className={styles.rightHeader}>CSS</h2>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Descriptions</th>
                <th>Unit</th>
                <th>PEEPL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Application</td>
                <td></td>
                <td>Outdoor</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rated Voltage</td>
                <td>kV</td>
                <td>12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Service Voltage</td>
                <td>kV</td>
                <td>11</td>
              </tr>
              <tr>
                <td>4</td>
                <td>System Frequency</td>
                <td>Hz</td>
                <td>50</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Rated impulse withstand voltage</td>
                <td>kVp</td>
                <td>75</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Rated power frequency withstand voltage</td>
                <td>kV rms</td>
                <td>28</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Rated LT voltage</td>
                <td>V</td>
                <td>433</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Degree Protection for Enclosure</td>
                <td></td>
                <td>IP 54</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Internal Arc Test</td>
                <td></td>
                <td>IAC-AB as per IEC 62271-202</td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  Max. Permissible Temperature for accessible part of the
                  enclosure.
                </td>
                <td>°C</td>
                <td>Below 70 Degree</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Dimension of Enclosure (LxWxH)</td>
                <td>mm x mm x mm</td>
                <td>As per Design</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Thickness of sheet for enclosure for base</td>
                <td></td>
                <td>
                  Enclosure with 2mm thick for load baring & 1.6 for non Load
                  bearing base with 4mm.
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Control Wiring</td>
                <td>Colour Code</td>
                <td>As per IEC Standard</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Ventilation aperture</td>
                <td></td>
                <td>K10</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Locking Arrangement</td>
                <td></td>
                <td>Provided</td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  Earthing to be provided (PSS, RMU, Trf body and neutral, LV
                  ACB & MCCB)
                </td>
                <td></td>
                <td>G.I Earthing Shall be Provided for all the compartment.</td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  Accessories like Heater, Lamps, hooter, door switch, etc.
                </td>
                <td></td>
                <td>Provided</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Paint</td>
                <td></td>
                <td>RAL 7032</td>
              </tr>
              <tr>
                <td>19</td>
                <td>
                  Number of accessories furnished
                  <br />
                  a) Earthing Equipment
                  <br />
                  b) Test Plug
                </td>
                <td></td>
                <td>Provided</td>
              </tr>
              <tr>
                <td>20</td>
                <td>HT and LT connection between Trf, RMU & LT ACB</td>
                <td></td>
                <td>
                  Interconnection Between HT switchgear & Transformer using
                  1Cx3Rx95Sq.mm XLPE Al Single core cable & Interconnection
                  between Transformers to LT switchgear using Aluminium bus bars
                  with LT Sleeve
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CssCard;
