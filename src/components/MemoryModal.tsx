import { MD } from '../data/content';

interface MemoryModalProps {
  memKey: string | null;
  onClose: () => void;
}

export function MemoryModal({ memKey, onClose }: MemoryModalProps) {
  const d = memKey ? MD[memKey] : null;

  return (
    <div className={`mb ${d ? 'on' : ''}`} id="mm" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="mc">
        <button className="mcl" onClick={onClose}>×</button>
        {d && (
          <>
            <div className="memoji">{d.e}</div>
            <div className="mtit">{d.t}</div>
            {d.photo && (
              <div className="modal-photo">
                <img src={d.photo} alt={d.t} onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = `
                    <div class="modal-photo-placeholder">
                      <span style="font-size:1.5rem">📷</span>
                      <span>${d.t}</span>
                    </div>
                  `;
                }} />
              </div>
            )}
            <div className="prose" id="mb2">
              {d.c.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
