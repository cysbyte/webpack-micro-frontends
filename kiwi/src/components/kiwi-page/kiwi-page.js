import ImageCaption from "../../../../image-caption/src/components/image-caption/image-caption";
import Heading from "../heading/heading";
import KiwiImage from "../kiwi-image/kiwi-image";

class KiwiPage{
    render() {
        const heading = new Heading();
        heading.render('kiwi');
        const kiwiImage = new KiwiImage();
        kiwiImage.render();

        import('ImageCaptionApp/ImageCaption')
            .then(ImageCaptionModule => {
                const ImageCaption = ImageCaptionModule.default;
                const imageCaption = new ImageCaption();
                imageCaption.render('Kiwifruit is oval, about the size of a large egg.')
            })
    }
}

export default KiwiPage;