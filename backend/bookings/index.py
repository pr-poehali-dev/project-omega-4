import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохранение заявки на бронирование стола в кафе КассетА"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    booking_date = body.get('booking_date', '').strip()
    booking_time = body.get('booking_time', '').strip()
    guests_count = body.get('guests_count')
    comment = body.get('comment', '').strip()

    if not all([name, phone, booking_date, booking_time, guests_count]):
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все обязательные поля'})
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO bookings (name, phone, booking_date, booking_time, guests_count, comment) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
        (name, phone, booking_date, booking_time, int(guests_count), comment or None)
    )
    booking_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': {'success': True, 'id': booking_id}
    }