package org.enso.table.data.column.builder.object;

import org.enso.table.data.column.storage.DateTimeStorage;
import org.enso.table.data.column.storage.Storage;
import org.enso.table.data.column.storage.type.DateTimeType;
import org.enso.table.data.column.storage.type.StorageType;

import java.time.ZonedDateTime;

/** A builder for string columns. */
public class DateTimeBuilder extends TypedBuilderImpl<ZonedDateTime> {
  @Override
  protected ZonedDateTime[] newArray(int size) {
    return new ZonedDateTime[size];
  }

  public DateTimeBuilder(int size) {
    super(size);
  }

  @Override
  public StorageType getType() {
    return DateTimeType.INSTANCE;
  }

  @Override
  public void appendNoGrow(Object o) {
    data[currentSize++] = (ZonedDateTime) o;
  }

  @Override
  public boolean accepts(Object o) {
    return o instanceof ZonedDateTime;
  }

  @Override
  public Storage<ZonedDateTime> seal() {
    return new DateTimeStorage(data, currentSize);
  }
}
