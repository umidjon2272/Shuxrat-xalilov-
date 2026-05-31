import { useState } from 'react';
import useInView from '../../hooks/useInView';
import { CONTACTS, SERVICES } from '../../data';
import './Contact.scss';

export default function Contact() {
  const [ref, inView] = useInView(0.1);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const submit = async () => {
    if (!form.name || !form.phone) {
      alert('Ism va telefon raqam kiriting!');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        'http://localhost:5000/lead',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);

        setForm({
          name: '',
          phone: '',
          service: '',
        });
      } else {
        alert('Xabar yuborilmadi');
      }
    } catch (error) {
      console.error(error);
      alert('Server bilan bog‘lanishda xatolik');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="aloqa" ref={ref} className="contact">
      <div className="contact__inner">
        <div className="contact__head">
          <div className="contact__eyebrow">Aloqa</div>
          <h2 className="contact__title">
            Loyihangizni <span>Boshlaylik!</span>
          </h2>
        </div>

        <div className="contact__grid">
          {/* Contact info */}
          <div className={`contact__info ${inView ? 'visible' : ''}`}>
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <div
                  className="contact__link-icon"
                  style={{ background: `${c.color}18` }}
                >
                  {c.icon}
                </div>

                <div>
                  <span className="contact__link-label">
                    {c.label}
                  </span>

                  <span
                    className="contact__link-value"
                    style={{ color: c.color }}
                  >
                    {c.value}
                  </span>
                </div>

                <span className="contact__link-arrow">
                  →
                </span>
              </a>
            ))}

            <div className="contact__hours">
              <h4>⏰ Ish vaqtim</h4>

              <p>
                Dushanba – Shanba: 9:00 – 22:00
                <br />
                Yakshanba: 10:00 – 18:00
                <br />
                <strong>Javob vaqti: 1–2 soat</strong>
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className={`contact__form-wrap ${
              inView ? 'visible' : ''
            }`}
          >
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  🎉
                </div>

                <h3>So‘rovingiz yuborildi!</h3>

                <p>
                  Tez orada siz bilan bog‘lanaman.
                </p>
              </div>
            ) : (
              <div className="contact__form">
                <div className="contact__form-title">
                  Bepul Konsultatsiya Olish
                </div>

                <div className="contact__fields">
                  <div>
                    <label className="contact__label">
                      Ismingiz *
                    </label>

                    <input
                      className="contact__input"
                      placeholder="Masalan: Sardor Rahimov"
                      value={form.name}
                      onChange={handle('name')}
                    />
                  </div>

                  <div>
                    <label className="contact__label">
                      Telefon *
                    </label>

                    <input
                      className="contact__input"
                      placeholder="+998 90 000 00 00"
                      value={form.phone}
                      onChange={handle('phone')}
                    />
                  </div>

                  <div>
                    <label className="contact__label">
                      Xizmat turi
                    </label>

                    <select
                      className="contact__select"
                      value={form.service}
                      onChange={handle('service')}
                    >
                      <option value="">
                        Tanlang...
                      </option>

                      {SERVICES.map((s) => (
                        <option
                          key={s.title}
                          value={s.title}
                        >
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="contact__submit"
                    onClick={submit}
                    disabled={loading}
                  >
                    {loading
                      ? 'Yuborilmoqda...'
                      : '🚀 Bepul Konsultatsiya So‘rash'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}