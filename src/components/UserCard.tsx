import pfp from '@/assets/imgs/profile.webp';

const UserCard = () => {
    return (
        <div className="glass-card flex flex-col items-center p-8 max-w-sm mx-auto mb-8 animate-fade-in">
            <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-md animate-pulse"></div>
                <img
                    src={pfp}
                    alt="Profile Picture"
                    className="w-full h-full object-cover rounded-full border-4 border-white/80 shadow-lg relative z-10"
                />
            </div>

            <h3 className="text-2xl font-bold text-gray-700 mb-2 font-['Krub']">จิรัญญา นวลละออง</h3>

            <div className="flex flex-col gap-1 items-center">
                <span className="px-4 py-1 bg-white/40 rounded-full text-sm font-medium text-gray-600 shadow-sm border border-white/50">
                    นักศึกษาชั้นปีที่ 3
                </span>
                <span className="px-4 py-1 bg-white/40 rounded-full text-sm font-medium text-gray-600 shadow-sm border border-white/50 mt-1">
                    สาขาเทคโนโลยีสารสนเทศ
                </span>
                <p className="mt-3 text-sm text-gray-500 font-medium">คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร</p>
            </div>
        </div>
    );
};

export default UserCard;
