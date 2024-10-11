export const setAttributes = <element extends Record<any, any>>(objProps: element, elementRef: HTMLElement) => {
    Object.entries(objProps).forEach(
        ([prop, value]) => elementRef.setAttribute(prop, value)
    )
}