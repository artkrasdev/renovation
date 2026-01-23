interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  return (
    <div className={`w-full h-full min-h-[300px] rounded-xl overflow-hidden ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264.3961069663648!2d4.39501167922017!3d45.41597024124641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a948ae39ddf7%3A0x6d043f0ff08080e0!2sSmailji%20Multi-Services!5e0!3m2!1sen!2sfr!4v1769167932127!5m2!1sen!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
}

