import style from "./Test.module.css";

import { useState } from "react";
export default function TesT({name="Devices"}) {
	const [newDeviceFormInfo, setNewDeviceFormInfo] = useState({ deviceName: "", isDisabled: false });
 
	const [devices, setDevices] = useState([]);

	class utile {
		static handelChangeFormInputs(event, setStatForm) {
			let { id, value, checked, type, name } = event.target;

			value = id === "age" ? parseInt(value, 10) : value;

			setStatForm((formInputs) => {
				return { ...formInputs, [type === "radio" ? name : id]: type === "checkbox" ? checked : value };
			});
		}
	}
	class clsHandelAddNewDevice {
		static ChangeFormInputs(event) {
			utile.handelChangeFormInputs(event, setNewDeviceFormInfo);
		}
		static #changeSubmitButtonStat(newStat) {
			setNewDeviceFormInfo((prevFormInfo) => {
				return { ...prevFormInfo, isDisabled: newStat };
			});
		}
		static #clearAddFormStat() {
			setNewDeviceFormInfo((prevFormInfo) => {
				return { deviceName: "", isDisabled: false };
			});
		}
		static handelFormSubmit(event) {
			event.preventDefault();
			// true => disabled = true
			clsHandelAddNewDevice.#changeSubmitButtonStat(true);

			clsHandelCurdDevices.addDevice(newDeviceFormInfo["deviceName"]);

			clsHandelAddNewDevice.#clearAddFormStat();
		}
	}
	class clsHandelCurdDevices {
		static addDevice(deviceName) {
			setDevices((prevDevicesInfo) => [...prevDevicesInfo, deviceName]);
		}
		static editDevice(deviceIndex) {
			let targetDeviceName = devices[deviceIndex];

			let newName = prompt(`Enter the  new name   [index  ${deviceIndex}] : `, targetDeviceName);

			if (newName && newName !== targetDeviceName) {
				let tempDevices = [...devices];
				tempDevices[deviceIndex] = newName;

				setDevices(tempDevices);
			}
		}
		static deleteDevice(deviceIndex) {
			let newDeviceList = [...devices];
			newDeviceList.splice(deviceIndex, 1);
			setDevices(newDeviceList);
		}
	}

	return (
		<>
			<div className="header">
				<h1>{name}</h1>
				<form id="addDeviceForm" onSubmit={clsHandelAddNewDevice.handelFormSubmit}>
					<input type="text" id="deviceName" placeholder="Enter the name of the device" value={newDeviceFormInfo["deviceName"]} onChange={clsHandelAddNewDevice.ChangeFormInputs} required />
					<button disabled={newDeviceFormInfo["isDisabled"]}>Add device</button>
				</form>
			</div>
			<div className="devicesContainer">
				{devices.map((deviceName, index) => {
					return (
						<div key={index} className="deviceItem">
							<h1 className="deviceName">
								{" "}
								{index}-{deviceName}
							</h1>
							<div className="controlSection">
								<button onClick={() => clsHandelCurdDevices.editDevice(index)}>Edit Device</button>
								<button onClick={() => clsHandelCurdDevices.deleteDevice(index)}>delete Device</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
