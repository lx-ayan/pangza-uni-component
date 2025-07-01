export const DEFAULT_NAMESPACE = "pa-";

function _bem(name, element, modifierAttr, modifierValue) {
	let className = `${name}`
	element && (className += `__${element}`)
	modifierAttr && (className += `--${modifierAttr}`)
	modifierValue && (className += `_${modifierValue}`)
	return className
}

export function createComponentBem(name) {
	const componentName = DEFAULT_NAMESPACE + name.trim();

	const b = _bem(componentName);

	const e = element => element ? _bem(componentName, element) : '';
	
	const m = (modifierAttr, modifierValue) => modifierAttr ? _bem(componentName, '', modifierAttr, modifierValue) : '';

	return {
		nameSpace: componentName,
		b,
		e,
		m
	}
}
