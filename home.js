let titles = [
    "Space Smart Museum is a blockchain virtual platform on the metaverse where people all over the world can equally enjoy communicating through art and culture. <br>It orbits 400 km above the ground, the same distance as the International Space Station.<br>I imagined a place where people from all over the world can gather in peace, so, created an organic structure with lots of nature. This place is an oasis floating in space.",
    "There are about 200 doors above ground, leading to VR galleries all the countries around the world.<br>Touch the place you want to go from the globe at the entrance and you will be taken to the front of the gallery for that country.",
    "VR museums in countries around the world are a showcase of the skills of artists from different countries.<br>You can feel the atmosphere and culture of the country as well as the artwork.</br>By experiencing the art of each country, a spirit of mutual understanding and respect is naturally created.",
    "A gallery that displays arts from all over the world, organized by themes. </br>In the VR Museum, the exhibits can change every day, or you can choose an exhibit that exists in parallel, depending on your mood on that day.</br>And one of the attractions of the VR Museum is that you can face life-size works of art!",
    "Through dialogue with astronauts, I came to understand that people could raise their awareness of social issues even more by putting themselves in an environment where they could get a bird's-eye view of the Earth. This is called the Overview Effect. This museum is also a place where people can experience the Overview Effect.<br> <br> <a href=\"https://nako.one\">Here is an art app that is one way to get tokens for this VR museum.<\/a> <br> <a href=\"https://cluster.mu/w/61bb1469-2e84-4603-96fc-bf3449993222/entry\">And to experience the VR version of the Space Smart Museum, click here!</a> "
]

$('.carousel').slick({
    dots: true, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 1000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
});

slick_post_move()

$('.carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log("Apple", String(nextSlide))
    $('.title').html(titles[nextSlide])
});

function slick_post_move() {
    // URLを取得
    let url = new URL(window.location.href);
    // URLSearchParamsオブジェクトを取得
    let params = url.searchParams;

    let point = params.get('point')

    if (point != null) {
        $('.carousel').slick('slickGoTo', point, true);
        let number = Number(point)
        let numberString = titles[number]
        $('.title').html(numberString)
    }
}