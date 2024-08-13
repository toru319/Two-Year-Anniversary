document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date(2024, 8, 26, 0, 0, 0);
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const remainingTime = targetDate - now;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }

    function showWhiteOut() {
        const whiteScreen = document.createElement('div');
        whiteScreen.style.position = 'fixed';
        whiteScreen.style.top = '0';
        whiteScreen.style.left = '0';
        whiteScreen.style.width = '100vw';
        whiteScreen.style.height = '100vh';
        whiteScreen.style.backgroundColor = 'white';
        whiteScreen.style.zIndex = '1000';
        whiteScreen.style.transition = 'opacity 1s';
        whiteScreen.style.opacity = '1';

        document.body.appendChild(whiteScreen);

        setTimeout(() => {
            const text = document.createElement('div');
            text.style.position = 'fixed';
            text.style.top = '50%';
            text.style.left = '50%';
            text.style.transform = 'translate(-50%, -50%)';
            text.style.fontSize = '2em';
            text.style.color = 'black';
            text.style.zIndex = '1001';
            text.textContent = '';
            document.body.appendChild(text);

            const message = 'あれから、2年';
            let index = 0;

            function typeText() {
                if (index < message.length) {
                    text.textContent += message[index];
                    index++;
                    setTimeout(typeText, 500);
                } else {
                    setTimeout(() => {
                        whiteScreen.style.opacity = '0';
                        text.style.opacity = '0';
                        setTimeout(() => {
                            document.body.removeChild(whiteScreen);
                            document.body.removeChild(text);
                            document.getElementById('countdown-container').style.display = 'block';
                            showMainContent();
                        }, 1000);
                    }, 2000);
                }
            }
            typeText();
        }, 1000);
    }

    function showMainContent() {
        setInterval(updateCountdown, 1000);

        const photos = [
        '/写真/2023-04-18_08-34-26_527.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-05-05_21-28-30_946.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-05-05_21-28-34_540.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-05-05_21-28-57_888.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-05-05_21-29-15_255.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-07-28_09-09-51_415.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-08_21-31-23_248.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-11_09-03-22_079.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-15_12-41-56_461.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-17_19-47-28_965.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-26_07-27-19_036.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-26_07-27-37_781.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-26_22-33-19_771.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-26_22-33-25_233.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-26_22-33-30_163.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-08-26_22-40-19_370.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-09-18_14-21-20_051.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-09-18_21-21-34_569.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-09-22_10-27-37_677.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-10-03_23-27-48_151.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-10-03_23-27-50_775.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-10-10_23-40-52_830.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-10-30_22-04-48_866.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-11-11_22-22-24_000.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-11-11_22-23-56_672.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-12-25_22-16-44_932.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-12-25_22-16-51_001.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-12-25_22-16-55_373.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-12-25_22-16-55_587.jpeg',
        '/Users/toru/個人用/プログラミング練習/JavaScript/Project1/写真/2023-12-29_20-37-11_588.jpeg',
        ];

        function fadePhotos() {
            const usedPositions = [];
            document.querySelectorAll('.photo').forEach(photo => photo.remove());

            photos.forEach((photo, index) => {
                setTimeout(() => {
                    const img = document.createElement('img');
                    img.src = photo;
                    img.className = 'photo';
                    img.style.opacity = '0';

                    let position;
                    do {
                        position = {
                            left: Math.random() * (window.innerWidth - 100),
                            top: Math.random() * (window.innerHeight - 100)
                        };
                    } while (usedPositions.some(pos => Math.abs(pos.left - position.left) < 100 && Math.abs(pos.top - position.top) < 100));

                    usedPositions.push(position);
                    img.style.left = `${position.left}px`;
                    img.style.top = `${position.top}px`;

                    document.body.appendChild(img);

                    setTimeout(() => {
                        img.style.transition = 'opacity 2s';
                        img.style.opacity = '1';
                    }, 100);
                }, Math.floor(index / 3) * 1000); // 3枚ずつ表示
            });

            setTimeout(() => {
                document.querySelectorAll('.photo').forEach(photo => {
                    photo.style.opacity = '0';
                    setTimeout(() => photo.remove(), 1000);
                });
            }, Math.ceil(photos.length / 3) * 1000 + 1000); // すべての画像が表示された1秒後にフェードアウト
        }

        fadePhotos();
        setInterval(fadePhotos, Math.ceil(photos.length / 3) * 2000 + 3000);
    }

    showWhiteOut();
});
