import React, { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import pokemonSlice, {
	selectPokemons,
	setCloseModal,
	setOpenModal,
} from "@/state/pokemonSlice";

const ModalPortal: FC<any> = ({ children }: { children: ReactNode }) => {
	const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
	const { isModal } = useSelector(selectPokemons);
	const dispatch = useDispatch();
	useEffect(() => {
		// Create a new div element for the portal
		const newPortalRoot = document.createElement("div");
		newPortalRoot.setAttribute("id", "portal-root");
		document.body.appendChild(newPortalRoot);

		// Set the portal root element in the state
		setPortalRoot(newPortalRoot);
		// Clean up the portal root element when the component unmounts
		return () => {
			document.body.removeChild(newPortalRoot);
			dispatch(setCloseModal());
		};
	}, []);

	if (!portalRoot || !isModal) return null;

	return createPortal(<>{children}</>, portalRoot);
};

export default ModalPortal;
