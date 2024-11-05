/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/ariankoochak",
                permanent: true,
            },
            {
                source: "/cloud",
                destination:
                    "https://mega.nz/folder/yQ11XJ6a#HKqEfDjBETz9vbxFVvbBMA",
                permanent: true,
            },
            {
                source: "/quera",
                destination: "https://quera.org/profile/DULDQ",
                permanent: true,
            },
            {
                source: "/instagram",
                destination: "https://www.instagram.com/ariankoochak/",
                permanent: true,
            },
            {
                source: "/linkedin",
                destination:
                    "https://www.linkedin.com/in/arian-koochak-281b36240/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
