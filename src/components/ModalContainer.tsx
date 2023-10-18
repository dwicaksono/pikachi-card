import React, { FC } from "react";
import ModalPortal from "./ModalPortal";
import { AiOutlineClose } from "react-icons/ai";

const ModalContainer: FC<any> = ({ close, children }) => {
	return (
		<ModalPortal>
			<div
				className="flex flex-col justify-center items-center  h-screen w-screen  backdrop-blur-lg bg-white/30 absolute z-10 top-0"
				onClick={close}>
				<div
					className="bg-glass p-4 h-fit w-fit rounded-xl"
					onClick={(e) => e.stopPropagation()}>
					<div className="flex justify-end w-full items-center">
						<button onClick={close}>
							<AiOutlineClose />
						</button>
					</div>
					<div className="p-10 flex flex-col">
						<>{children}</>
					</div>
				</div>
			</div>
		</ModalPortal>
	);
};

export default ModalContainer;
