export abstract class BasePage {

    protected clickElement(element: WebdriverIO.Element, timeout: number = 5000) {
        element.waitForClickable({timeout});
        return element.click();
    }

    protected getElementText(element: WebdriverIO.Element, timeout: number = 5000) {
        element.waitForDisplayed({timeout})
        return element.getText();
    }

    protected setElementValue(element: WebdriverIO.Element, value: string, timeout: number = 5000) {
        element.waitForClickable({timeout});
        element.setValue(value);
    }

    protected setElementValueJs(element: WebdriverIO.Element, value: string) {
        this.setElementAttributeJs(element, 'value', value);
    }

    protected dragAndDropElement(element: WebdriverIO.Element, x: any, y: number) {
        element.dragAndDrop({ x: x, y: y });
    }

    protected getElementAttribute(element: WebdriverIO.Element, attribute: string) {
        return element.getAttribute(attribute);
    }

    protected getElementValue(element: WebdriverIO.Element, timeout: number = 5000) {
        element.waitForDisplayed({timeout});
        return element.getValue();
    }

    protected getElementContent(element: WebdriverIO.Element, timeout: number = 5000) {
        element.waitForDisplayed({timeout});
        return this.getElementAttribute(element, 'textContent');
    }

    protected setElementAttributeJs(element: WebdriverIO.Element, attribute: string, value: string) {
        browser.execute(`arguments[0].setAttribute('${attribute}', '${value}')`, element);
    }
}
