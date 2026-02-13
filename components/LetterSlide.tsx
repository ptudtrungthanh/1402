import React from 'react';

const LetterSlide: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full px-4 md:px-0 py-8">
      <div className="relative w-full max-w-2xl bg-[#fffcf5] p-8 md:p-12 shadow-2xl rotate-1 rounded-sm border border-gray-200">
        {/* Paper texture effect/lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px)', backgroundSize: '100% 2rem' }}>
        </div>

        <div className="relative z-10 h-[60vh] md:h-auto overflow-y-auto scrollbar-hide">
          <h2 className="text-3xl font-display text-rose-700 mb-6 text-center">Gửi Bonn của anh,</h2>
          
          <div className="space-y-4 text-xl md:text-2xl font-script text-gray-800 leading-relaxed">
            <p>
              Happy Valentine! 🌹
            </p>
            <p>
              Nhân ngày lễ tình nhân, anh muốn gửi đến em món quà nhỏ này cùng với tất cả tình yêu thương của anh.
            </p>
            <p>
              Cảm ơn em đã đến bên anh, làm cho cuộc sống của anh trở nên rực rỡ và ý nghĩa hơn bao giờ hết. 
              Mỗi khoảnh khắc bên em đều là một món quà vô giá đối với anh.
            </p>
            <p>
              Như lời bài hát đang phát: 
              <span className="block mt-2 pl-4 border-l-4 border-rose-300 italic text-rose-600">
                "50 năm về sau, anh vẫn sẽ yêu em như ngày đầu..."
              </span>
            </p>
            <p>
              Mong rằng chúng mình sẽ mãi bên nhau, cùng nhau già đi, cùng nhau chia sẻ mọi buồn vui trong cuộc sống em nhé.
            </p>
            <p className="mt-8 text-right font-bold text-rose-600 text-3xl">
              I Love You Forever! <br/>
              Anh yêu em.
            </p>
          </div>
        </div>
        
        {/* Tape decoration */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-rose-200/50 rotate-2"></div>
      </div>
    </div>
  );
};

export default LetterSlide;