import { EventData } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";

export function onNavigate(args: EventData) {
    const button = <Button>args.object;
    button.page.frame.navigate("some-page/some-page");
}

export function onNavigateNone(args: EventData) {
    const button = <Button>args.object;
    button.page.frame.navigate({
        moduleName: "some-page/some-page",
        animated: false
    });
}

export function onNavigateSlide(args: EventData) {
    const button = <Button>args.object;
    button.page.frame.navigate({
        moduleName: "some-page/some-page",
        animated: true,
        transition: {
            name: "slide",
            duration: 380,
            curve: "easeIn"
        }
    });
}

export function onNavigateFlip(args: EventData) {
    const button = <Button>args.object;
    button.page.frame.navigate({
        moduleName: "some-page/some-page",
        animated: true,
        transition: {
            name: "flip",
            duration: 380,
            curve: "easeIn"
        }
    });
}
